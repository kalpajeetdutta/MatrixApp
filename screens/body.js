import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import data from '../utils/data';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {add, multiply, substract, transpose} from '../utils/operations';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Body = ({navigation}) => {
  const [matrix1rows, setMatrix1Rows] = useState(0);
  const [matrix1cols, setMatrix1Cols] = useState(0);
  const [matrix2rows, setMatrix2Rows] = useState(0);
  const [matrix2cols, setMatrix2Cols] = useState(0);
  const [error, setError] = useState('');
  const [ans, setAns] = useState(null);

  const [table1, setTable1] = useState(() => data(matrix1rows, matrix1cols));
  const [table2, setTable2] = useState(() => data(matrix2rows, matrix2cols));

  return (
    <LinearGradient
      colors={['#b6bdc4', '#93c8df']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <SafeAreaView className="p-5 pb-24">
        <TouchableOpacity
          className="w-8"
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          className="h-full"
          showsVerticalScrollIndicator={false}>
          <View>
            <Text className="text-center text-2xl font-semibold text-black">
              Matrix A
            </Text>
            <View className="flex flex-row justify-center items-center my-3">
              <TextInput
                className="bg-gray-300 text-lg text-black w-16 rounded-md text-center"
                value={matrix1rows}
                keyboardType="number-pad"
                onChangeText={value => {
                  let row1 = value;

                  if (row1 === '') {
                      setMatrix1Rows(3);
                      setTable1(() => data(3, matrix1cols))
                    setError(null);
                  } else if (row1 >= 1 && row1 <= 5) {
                    setMatrix1Rows(parseInt(row1));
                    setTable1(() => data(row1, matrix1cols))
                  } else {
                    console.log('Row out of range');
                    setError('Row out of range');
                  }
                }}
              />
              <Text className="text-xl mx-3">X</Text>
              <TextInput
                className="bg-gray-300 text-lg text-black w-16 rounded-md text-center"
                value={matrix1cols}
                keyboardType="number-pad"
                onChangeText={value => {
                  let col1 = value;

                  if (col1 === '') {
                    setMatrix1Cols(3);
                    setTable1(() => data(matrix1rows, 3))
                    setError(null);
                  } else if (col1 >= 1 && col1 <= 5) {
                    setMatrix1Cols(parseInt(col1));
                    setTable1(() => data(matrix1rows, col1))
                  } else {
                    console.log('Column out of range');
                    setError('Column out of range');
                  }
                }}
              />
            </View>
            <View className="my-3">
              <View className="flex mx-auto">
                {table1.map((row, x_index) => {
                  return (
                    <View className="flex flex-row" key={x_index}>
                      {row.map((col, y_index) => {
                        return (
                          <View className="m-1" key={y_index}>
                            <TextInput
                              className="w-full text-center bg-gray-300 p-5 text-lg rounded-md text-black"
                              keyboardType="number-pad"
                              onChangeText={data => {
                                // console.log(event.target.value)
                                // console.log('index: ', x_index, y_index)
                                table1[x_index][y_index] = parseInt(data);
                                console.log(table1);
                              }}
                            />
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
          <View className="my-5">
            <Text className="text-center text-2xl font-semibold text-black">
              Matrix B
            </Text>
            <View className="flex flex-row justify-center items-center my-3">
              <TextInput
                className="bg-gray-300 text-lg text-black w-16 rounded-md text-center"
                value={matrix2rows}
                keyboardType="number-pad"
                onChangeText={value => {
                  let row2 = value;

                  if (row2 === '') {
                    setMatrix2Rows(3);
                    setTable2(() => data(3, matrix2cols))
                    setError(null);
                  } else if (row2 >= 1 && row2 <= 5) {
                    setMatrix2Rows(parseInt(row2));
                    setTable2(() => data(row2, matrix2cols))
                  } else {
                    console.log('Row out of range');
                    setError('Row out of range');
                  }
                }}
              />
              <Text className="text-xl mx-3">X</Text>
              <TextInput
                className="bg-gray-300 text-lg text-black w-16 rounded-md text-center"
                value={matrix2cols}
                keyboardType="number-pad"
                onChangeText={value => {
                  let col2 = value;

                  if (col2 === '') {
                    setMatrix2Cols(3);
                    setTable2(() => data(matrix2rows, 3))
                    setError(null);
                  } else if (col2 >= 1 && col2 <= 5) {
                    setMatrix2Cols(parseInt(col2));
                    setTable2(() => data(matrix2rows, col2))
                  } else {
                    console.log('Column out of range');
                    setError('Column out of range');
                  }
                }}
              />
            </View>
            <View className="my-3">
              <View className="flex mx-auto">
                {table2.map((row, x_index) => {
                  return (
                    <View className="flex flex-row" key={x_index}>
                      {row.map((col, y_index) => {
                        return (
                          <View className="m-1" key={y_index}>
                            <TextInput
                              className="w-full text-center bg-gray-300 p-5 text-lg rounded-md text-black"
                              keyboardType="number-pad"
                              onChangeText={data => {
                                // console.log(event.target.value)
                                // console.log('index: ', x_index, y_index)
                                table2[x_index][y_index] = parseInt(data);
                                console.log(table2);
                              }}
                            />
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-evenly my-3">
            <TouchableOpacity
              className="bg-[#0e3157] py-2 px-5 rounded-3xl"
              activeOpacity={0.8}
              onPress={() => {
                if (
                  matrix1rows === matrix2rows &&
                  matrix1cols === matrix2cols
                ) {
                  let value = add(table1, table2, matrix1rows, matrix1cols);
                  console.log(value);
                  value.length != 0
                    ? setError(null)
                    : setError('Please enter rows and columns');
                  setAns(value);
                } else {
                  console.log('Matrix cannot be added');
                  setError('Matrix cannot be added');
                }
              }}>
              <Text className="text-lg font-medium text-gray-200">A + B</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#0e3157] py-2 px-5 rounded-3xl"
              activeOpacity={0.8}
              onPress={() => {
                if (
                  matrix1rows === matrix2rows &&
                  matrix1cols === matrix2cols
                ) {
                  let value = substract(
                    table1,
                    table2,
                    matrix1rows,
                    matrix1cols,
                  );
                  console.log(value);
                  value.length != 0
                    ? setError(null)
                    : setError('Please enter rows and columns');
                  setAns(value);
                } else {
                  console.log('Matrix cannot be substract');
                  setError('Matrix cannot be substract');
                }
              }}>
              <Text className="text-lg font-medium text-gray-200">A - B</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#0e3157] py-2 px-5 rounded-3xl"
              activeOpacity={0.8}
              onPress={() => {
                if (matrix1cols === matrix2rows) {
                  let value = multiply(
                    table1,
                    table2,
                    matrix1rows,
                    matrix1cols,
                    matrix2cols,
                  );
                  console.log(value);
                  value.length != 0
                    ? setError(null)
                    : setError('Please enter rows and columns');
                  setAns(value);
                } else {
                  console.log("Rows and columns didn't matched");
                  setError("Rows and columns didn't matched");
                }
              }}>
              <Text className="text-lg font-medium text-gray-200">A x B</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-evenly my-3">
            <TouchableOpacity
              className="bg-[#0e3157] py-2 px-5 rounded-3xl"
              activeOpacity={0.8}
              onPress={() => {
                let value = transpose(table1, matrix1rows, matrix1cols);
                console.log(value);
                value.length != 0
                  ? setError(null)
                  : setError('Please enter rows and columns');
                setAns(value);
              }}>
              <Text className="text-lg font-medium text-gray-200">
                A Transpose
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#0e3157] py-2 px-5 rounded-3xl"
              activeOpacity={0.8}
              onPress={() => {
                let value = transpose(table2, matrix2rows, matrix2cols);
                console.log(value);
                value.length != 0
                  ? setError(null)
                  : setError('Please enter rows and columns');
                setAns(value);
              }}>
              <Text className="text-lg font-medium text-gray-200">
                B Transpose
              </Text>
            </TouchableOpacity>
          </View>
          <View className="my-5 w-full min-h-[100px] bg-slate-400 rounded-lg p-3">
            {error && (
              <Text className="text-base text-red-600 text-center w-full">
                {error}
              </Text>
            )}
            {ans &&
              ans.map((row, i) => {
                return (
                  <View key={i}>
                    <View className="flex flex-row">
                      {row.map((col, i) => {
                        return (
                          <View key={i}>
                            <Text
                              className="m-2 text-lg font-medium text-black">
                              {col}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
          </View>
          <View className="flex flex-row items-center justify-center">
            <View>
              <Icon
                name="information-circle-outline"
                size={25}
                color="#434546"
              />
            </View>
            <Text className="text-base text-slate-600 ml-2">
              To know more read the{' '}
              <Text
                className="text-blue-800 underline"
                onPress={() => Linking.openURL('http://google.com')}>
                documentation
              </Text>
            </Text>
          </View>
          <View className="bg-[#032e5c] flex items-center py-2 mt-10">
            <Text className="text-sm font-medium text-gray-50">
              Developed By
            </Text>
            <Text className="text-xs font-normal text-gray-50">
              Kalpajeet Dutta, Sharbanee Kalita & Prachurjya Goswami
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Body;
