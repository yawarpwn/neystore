'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CATEGORIES } from '@/const'
import { SubmitButton } from './submit-button'

export default function CreateUpdateProduct({ action, data, isEdit }) {
  return (
    <Card>
      <CardContent className='py-8'>
        <form action={action} className='flex items-center'>
          <div className='flex flex-col sm:flex-row gap-4'>
            {isEdit && <input type='hidden' name='id' value={data.id} />}
            <input
              type='number'
              placeholder='Tu precio'
              name='price'
              defaultValue={isEdit ? data.price : ''}
              required
            />
            <input
              type='hidden'
              defaultValue={JSON.stringify(data)}
              name='data'
            />
            <select
              name='category'
              defaultValue={isEdit ? data.category : ''}
              aria-labelledby='category'
              required
            >
              <option disabled value=''>
                Categoria
              </option>
              {Object.values(CATEGORIES).map((category) => (
                <option defaultValue={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
            <SubmitButton>Agregar</SubmitButton>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
