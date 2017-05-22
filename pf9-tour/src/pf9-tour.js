import { overview } from './tours/overview';
import { overview2 } from './tours/overview2';
import { ssu_overview } from './tours/ssu_overview';
import { skip } from './tours/skip';
import { kube_overview } from './tours/kube_overview';
window.pf9_modules = {}
window.pf9_modules['overview_tour'] = overview;
window.pf9_modules['product_tour'] = overview2;
window.pf9_modules['ssu_tour'] = ssu_overview;
window.pf9_modules['kube_overview_tour'] = kube_overview;
window.pf9_modules['skip_tour'] = skip;
