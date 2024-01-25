const path = require('path');
const util = require('util');

const fileUpload = async (file) => {
  const fileName = file.name;
  const size = file.data.length;
  const extension = path.extname(fileName);

  const allowedExtensions = /png|jpeg|jpg|gif|webp/;

  if (!allowedExtensions.test(extension)) throw 'Unsupported extension !';

  if (size > 5000000) throw 'File must be less than 5MB';

  const { md5 } = file;

  const URL = `/img/${md5}${extension}`;
  await util.promisify(file.mv)(
    path.resolve(path.join(__dirname, '../public', URL))
  );
  return URL;
};

module.exports = fileUpload;
