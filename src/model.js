import image from './assets/img.png';

const text = `Роман Кашигин. Junior Frontend Developer (ReactJS). Чтобы связаться пишите сюда => <a href="https://telegram.me/r_kashigin" target="_blank">Telegram</a>`;

export const model = [
    {
        type: 'title',
        value: 'Welcome to my website-builder',
        options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center',
            },
        },
    },
    {
        type: 'image',
        value: image,
        options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center',
            },
            imageStyles: {
                width: '400px',
                height: '200px',
            },
            alt:  'Здесь должна была появиться картинка..:(',
        },
    },
    {
        type: 'text',
        value: text,
        options: {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold',
            },
        },
    },
    {
        type: 'columns',
        value: [
            'Приложение на чистом JS, без сторонних библиотек',
            'Также здесь задействованы принципы ООП и SOLID',
        ],
        options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold',
            },
        },
    },
];