import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException
} from '@nestjs/common';

export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value.id == 1) return value;
    else throw new BadRequestException('Valiation failed');
  }
}
