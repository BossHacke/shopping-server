import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hashPasswordHelper } from 'src/helpers/util';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private user: Model<User>,
  ) { }

  //check mail khi đã đăng ký
  isEmailExist = async (email: string) => {
    const userMail = await this.user.exists({ email });
    if (userMail) return true;
    return false;
  }

  async create(createUserDto: CreateUserDto) {
    const { name, email, password, phone, address, image } = createUserDto;
    //mai làm check mail người dùng khi tạo tài khoản
    const isExist = await this.isEmailExist(email);
    if (isExist) {
      throw new BadRequestException(`Email đã tồn tại ${email}`);
    }
    const hashPassword = await hashPasswordHelper(password);
    const userDto = await this.user.create({
      name,
      email,
      password: hashPassword,
      phone,
      address,
      image
    })
    return {
      _id: userDto._id
    };
  }

  //Phân trang users
  async findAll(query: string, current: number, pageSize: number) {
    const { filter, sort } = aqp(query);
    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    if (!current) current = 1;
    if (!pageSize) pageSize = 10;

    const totalItems = (await this.user.find(filter)).length;
    const totalPages = Math.ceil(totalItems / pageSize);

    const skip = (current - 1) * (pageSize);

    const results = await this.user
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .select('-password')
      .sort(sort as any);

    return { results, totalPages };
  }

  findOne(id: number) {
    return `This action returns a user`;
  }

  async findByEmail(email: string) {
    return await this.user.findOne({ email });
  }

  async update(updateUserDto: UpdateUserDto) {
    const updateUser = await this.user.updateOne(
      { _id: updateUserDto._id },
      { ...updateUserDto },
    );
    return updateUser;
  }

  async remove(_id: string) {
    if (mongoose.isValidObjectId(_id)) {
      return await this.user.deleteOne({ _id });
    }
    else {
      throw new BadRequestException('id không đúng định dạng mongodb');
    }
  }
}
