import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '@my-workspace/prisma';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }
  create(createPostDto: CreatePostDto) {
    const { title, content, authorId } = createPostDto;
    const id = uuidv4();
    return this.prisma.post.create({
      data: {
        id,
        title,
        content,
        author: {
          connect: { id: authorId },
        },
        published: false,
      },
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    }); 
  }

  remove(id: string) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
