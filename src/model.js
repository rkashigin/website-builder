import image from './assets/img.png';
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
Роман Кашигин. Junior Frontend Developer (ReactJS). Чтобы связаться пишите сюда => <a href="https://telegram.me/r_kashigin" target="_blank">Telegram</a>
`;

export const model = [
    new TitleBlock('Welcome to my website-builder', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
        },
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: '200px',
        },
        alt:  'Здесь должна была появиться картинка..:(',
    }),
    new ColumnsBlock([
        'Приложение на чистом JS, без сторонних библиотек',
        'Также здесь задействованы принципы ООП и SOLID',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
        },
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
        }
    }),
];