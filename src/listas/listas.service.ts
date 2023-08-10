import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class ListasService {
  constructor(private readonly prisma: PrismaService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createListaDto: Prisma.ListaCreateInput) {
    return 'This action adds a new lista';
  }

  findAll() {
    return `This action returns all listas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lista`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateListaDto: Prisma.ListaUpdateInput) {
    return `This action updates a #${id} lista`;
  }

  remove(id: number) {
    return `This action removes a #${id} lista`;
  }
}
