import { NumericFormat } from 'react-number-format';

export function InputCurrency() {
  return (
    <NumericFormat
      className='w-full border border-gray-900'
      thousandSeparator="."
      decimalSeparator=','
    />
  )
}
