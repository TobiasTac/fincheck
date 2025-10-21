// import { ArgumentMetadata, Injectable, ParseUUIDPipe, PipeTransform } from '@nestjs/common';

// @Injectable()
// export class OptionalParseUUIDPipe implements PipeTransform {
//   private readonly uuidPipe = new ParseUUIDPipe();

//   async transform(value: any, metadata: ArgumentMetadata): Promise<string | undefined> {
//     if (value === undefined || value === null || value === '') {
//       return undefined;
//     }

//     // Convert to string and validate using the UUID pipe
//     const stringValue = String(value);
//     return this.uuidPipe.transform(stringValue, metadata);
//   }
// }

import { ArgumentMetadata, Injectable, ParseUUIDPipe, PipeTransform } from '@nestjs/common';

@Injectable()
export class OptionalParseUUIDPipe implements PipeTransform {
  private readonly uuidPipe = new ParseUUIDPipe();

  async transform(value: string, metadata: ArgumentMetadata): Promise<string | undefined> {
    if (value == null || value === '') {
      return undefined;
    }

    return this.uuidPipe.transform(value, metadata);
  }
}

