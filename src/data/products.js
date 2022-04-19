import pirlo from '../assets/andrea_pirlo.webp';
import toti from '../assets/francesco_totti.webp';
import valderrama from '../assets/carlos_valderrama.webp';
import maradona from '../assets/diego_maradona.webp';
import cruyff from '../assets/johan_cruyff.webp';
import messi from '../assets/leo_messi.webp';
import laudrup from '../assets/michael_laudrup.webp';
import baggio from '../assets/roberto_baggio.webp';
import gullit from '../assets/ruud_gullit.webp';
import socrates from '../assets/socrates.webp';
import xavi from '../assets/xavi_hernandez.webp';
import zidane from '../assets/zinedine_zidane.webp';

const item = (id, title, price, image) => ({
  id, title, price, image,
});

const products = [
  item(
    1,
    'Andrea Pirlo',
    10.99,
    pirlo,
  ),
  item(
    2,
    'Valderrama',
    19.99,
    valderrama,
  ),
  item(
    3,
    'Diego Maradona',
    99.99,
    maradona,
  ),
  item(
    4,
    'Francesco Totti',
    29.99,
    toti,
  ),
  item(
    5,
    'Johan Cruyff',
    59.99,
    cruyff,
  ),
  item(
    6,
    'Leo Messi',
    99.99,
    messi,
  ),
  item(
    7,
    'Michael Laudrup',
    89.99,
    laudrup,
  ),
  item(
    8,
    'Roberto Baggio',
    10.99,
    baggio,
  ),
  item(
    9,
    'Ruud Gullit',
    20.99,
    gullit,
  ),
  item(
    10,
    'Socrates',
    89.99,
    socrates,
  ),
  item(
    11,
    'Xavi Hernández',
    59.99,
    xavi,
  ),
  item(
    12,
    'Zinedine Zidane',
    29.99,
    zidane,
  ),
];

export default products;
