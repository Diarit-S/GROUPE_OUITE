import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Chapters from './components/Chapters';
import Earth from './components/Earth';
import Game from './components/Game';
import Document from './components/Document';
import AdminDocument from './components/Administration/AdminDocument.vue';

Vue.use(VueRouter);


export default new VueRouter({
  mode: 'history',
 routes : [
   {
     path : '/',
     component: Home,
   },
   {
     path : '/introduction',
     name: 'introduction',
     component: Introduction,
   },
   {
    path : '/chapters',
    name: 'chapters',
    component: Chapters,
  },
  {
    path : '/earth',
    name: 'earth',
    component: Earth,
  },
  {
    path : '/document/:id',
    name : 'document',
    component: Document,
  },
  {
    path : '/admindocument/:id',
    name : 'admindocument',
    component: AdminDocument,
  },
  {
    path : '/game',
    name: 'game',
    component: Game,
  }
 ]
})