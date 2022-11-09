const compress_images = require('compress-images');

const INPUT_path_to_your_images = 'images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
const OUTPUT_path = 'public/static/images/';

compress_images(
    INPUT_path_to_your_images,
    OUTPUT_path,
    {
        compress_force: false,
        statistic: true,
        autoupdate: true
    },
    false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '70'] } },
    { png: { engine: 'pngquant', command: ['--quality=50-70', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    { gif: { engine: 'gifsicle', command: ['--colors', '256', '--use-col=web'] } },
    function(error, completed, statistic)
    {
        console.log('-------------');
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log('-------------');
    }
);
