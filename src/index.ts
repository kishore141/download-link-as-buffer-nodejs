import { promises as fs } from 'fs';

const downloadBufferFromUrl = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

export default downloadBufferFromUrl;
