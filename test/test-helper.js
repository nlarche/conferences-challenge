/* eslint-disable */
import jsdom  from 'jsdom';
const  { JSDOM }  = jsdom

const { window } = new JSDOM('<html><head><script></script></head><body></body></html>');
global.window = window;
global.document = window.document;
global.navigator = window.navigator;

global.angular = window.angular;

