import {Header} from './components/header';
import {Button} from './components/Button';
import {Footer} from './components/Footer';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('No se ha encontrado el elemento con id "app"');
}

const header = new Header('Programación Web Avanzada');
const button = new Button('Guardar');
const footer = new Footer();


app.innerHTML = `
${header.render()}
${button.render()}
${footer.render()}`;

document.querySelector('#saveBtn')?.addEventListener('click', () => button.onclick());