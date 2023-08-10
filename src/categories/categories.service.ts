import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
@Injectable()
export class CategoriesService {
  prisma: any;
  category: any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createCategoryDto: Prisma.CategoryCreateInput) {
    return this.category.create({
      data: createCategoryDto,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateCategoryDto: Prisma.CategoryUpdateInput) {
    return this.category.update({
      data: updateCategoryDto,
      where: {
        id: id,
      },
    });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: {
        id: id,
      },
    });
  }
}
