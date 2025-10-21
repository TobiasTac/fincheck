import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  override async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }

    return super.transform(value, metadata);
  }
}
