import { defineNuxtPlugin } from "#app";

import PrimeVue from "primevue/config";
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import Galleria from 'primevue/galleria';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import Skeleton from 'primevue/skeleton';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import Tag from 'primevue/tag';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Timeline from 'primevue/timeline';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tooltip from 'primevue/tooltip';
import ToggleButton from 'primevue/togglebutton';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
// directives
import CodeHighlight from "~/scripts/directives/code-highlight";
import Focus from "~/scripts/directives/focus"

// import BlockViewer from './BlockViewer';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

    // Global utilities
    //nuxtApp.vueApp.config.globalProperties.UIHelper = UIHelper

    nuxtApp.vueApp.directive('tooltip', Tooltip);
    nuxtApp.vueApp.directive('ripple', Ripple);
    nuxtApp.vueApp.directive('code', CodeHighlight);
    nuxtApp.vueApp.directive('badge', BadgeDirective);
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.directive('focus', Focus)

    nuxtApp.vueApp.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
    nuxtApp.vueApp.use(ConfirmationService);
    nuxtApp.vueApp.use(ToastService);

    nuxtApp.vueApp.component('K3Accordion', Accordion);
    nuxtApp.vueApp.component('K3AccordionTab', AccordionTab);
    nuxtApp.vueApp.component('K3AutoComplete', AutoComplete);
    nuxtApp.vueApp.component('K3Avatar', Avatar);
    nuxtApp.vueApp.component('K3AvatarGroup', AvatarGroup);
    nuxtApp.vueApp.component('K3Badge', Badge);
    nuxtApp.vueApp.component('K3Breadcrumb', Breadcrumb);
    nuxtApp.vueApp.component('K3Button', Button);
    nuxtApp.vueApp.component('K3Calendar', Calendar);
    nuxtApp.vueApp.component('K3Card', Card);
    nuxtApp.vueApp.component('K3Carousel', Carousel);
    nuxtApp.vueApp.component('K3Chart', Chart);
    nuxtApp.vueApp.component('K3Checkbox', Checkbox);
    nuxtApp.vueApp.component('K3Chip', Chip);
    nuxtApp.vueApp.component('K3Chips', Chips);
    nuxtApp.vueApp.component('K3ColorPicker', ColorPicker);
    nuxtApp.vueApp.component('K3Column', Column);
    nuxtApp.vueApp.component('K3ConfirmDialog', ConfirmDialog);
    nuxtApp.vueApp.component('K3ConfirmPopup', ConfirmPopup);
    nuxtApp.vueApp.component('K3ContextMenu', ContextMenu);
    nuxtApp.vueApp.component('K3DataTable', DataTable);
    nuxtApp.vueApp.component('K3DataView', DataView);
    nuxtApp.vueApp.component('K3DataViewLayoutOptions', DataViewLayoutOptions);
    nuxtApp.vueApp.component('K3Dialog', Dialog);
    nuxtApp.vueApp.component('K3Divider', Divider);
    nuxtApp.vueApp.component('K3Dropdown', Dropdown);
    nuxtApp.vueApp.component('K3Fieldset', Fieldset);
    nuxtApp.vueApp.component('K3FileUpload', FileUpload);
    nuxtApp.vueApp.component('K3InlineMessage', InlineMessage);
    nuxtApp.vueApp.component('K3Inplace', Inplace);
    nuxtApp.vueApp.component('K3InputMask', InputMask);
    nuxtApp.vueApp.component('K3InputNumber', InputNumber);
    nuxtApp.vueApp.component('K3InputSwitch', InputSwitch);
    nuxtApp.vueApp.component('K3InputText', InputText);
    nuxtApp.vueApp.component('K3Galleria', Galleria);
    nuxtApp.vueApp.component('K3Knob', Knob);
    nuxtApp.vueApp.component('K3Listbox', Listbox);
    nuxtApp.vueApp.component('K3MegaMenu', MegaMenu);
    nuxtApp.vueApp.component('K3Menu', Menu);
    nuxtApp.vueApp.component('K3Menubar', Menubar);
    nuxtApp.vueApp.component('K3Message', Message);
    nuxtApp.vueApp.component('K3MultiSelect', MultiSelect);
    nuxtApp.vueApp.component('K3OrderList', OrderList);
    nuxtApp.vueApp.component('K3OrganizationChart', OrganizationChart);
    nuxtApp.vueApp.component('K3OverlayPanel', OverlayPanel);
    nuxtApp.vueApp.component('K3Paginator', Paginator);
    nuxtApp.vueApp.component('K3Panel', Panel);
    nuxtApp.vueApp.component('K3PanelMenu', PanelMenu);
    nuxtApp.vueApp.component('K3Password', Password);
    nuxtApp.vueApp.component('K3PickList', PickList);
    nuxtApp.vueApp.component('K3ProgressBar', ProgressBar);
    nuxtApp.vueApp.component('K3ProgressSpinner', ProgressSpinner);
    nuxtApp.vueApp.component('K3RadioButton', RadioButton);
    nuxtApp.vueApp.component('K3Rating', Rating);
    nuxtApp.vueApp.component('K3SelectButton', SelectButton);
    nuxtApp.vueApp.component('K3ScrollPanel', ScrollPanel);
    nuxtApp.vueApp.component('K3ScrollTop', ScrollTop);
    nuxtApp.vueApp.component('K3Slider', Slider);
    nuxtApp.vueApp.component('K3Sidebar', Sidebar);
    nuxtApp.vueApp.component('K3Skeleton', Skeleton);
    nuxtApp.vueApp.component('K3SplitButton', SplitButton);
    nuxtApp.vueApp.component('K3Splitter', Splitter);
    nuxtApp.vueApp.component('K3SplitterPanel', SplitterPanel);
    nuxtApp.vueApp.component('K3Steps', Steps);
    nuxtApp.vueApp.component('K3TabMenu', TabMenu);
    nuxtApp.vueApp.component('K3TabView', TabView);
    nuxtApp.vueApp.component('K3TabPanel', TabPanel);
    nuxtApp.vueApp.component('K3Tag', Tag);
    nuxtApp.vueApp.component('K3Textarea', Textarea);
    nuxtApp.vueApp.component('K3TieredMenu', TieredMenu);
    nuxtApp.vueApp.component('K3Timeline', Timeline);
    nuxtApp.vueApp.component('K3Toast', Toast);
    nuxtApp.vueApp.component('K3Toolbar', Toolbar);
    nuxtApp.vueApp.component('K3ToggleButton', ToggleButton);
    nuxtApp.vueApp.component('K3Tree', Tree);
    nuxtApp.vueApp.component('K3TreeSelect', TreeSelect);
    nuxtApp.vueApp.component('K3TreeTable', TreeTable);
    nuxtApp.vueApp.component('K3TriStateCheckbox', TriStateCheckbox);
    //other components that you need
});
