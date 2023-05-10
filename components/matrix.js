import { View, TextInput } from 'react-native'
import React, { useState } from 'react'

const Matrix = ({tables, rows, cols}) => {

    // const [value, setValue] = useState(tables)
    console.log(tables)

  return (
    <View className='flex mx-auto'>
        {tables.map((row, x_index) => {
            return(
                <View className="flex flex-row" key={x_index}>
                    {row.map((col, y_index) => {
                        return(
                            <View className="m-1" key={y_index}>
                                <TextInput className="w-full text-center bg-gray-300 p-5 text-lg rounded-md text-black" keyboardType='number-pad' 
                                onChangeText={data => {
                                    // console.log(event.target.value)
                                    // console.log('index: ', x_index, y_index)
                                    tables[x_index][y_index] = parseInt(data);
                                    console.log(tables)
                                }}/>
                            </View>
                        )
                    })}
                </View>
            )
        })}
        </View>
  )
}

export default Matrix