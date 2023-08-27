import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('test load', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(ArrayBufferConverter.load(data)).toBeInstanceOf(ArrayBuffer);
});

test('test toString', () => {
  const data = getBuffer();
  expect(ArrayBufferConverter.toString(data)).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
