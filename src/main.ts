import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import EsriMap from './widgets/EsriMap';

const root = document.querySelector('map') || undefined;

const Projector = ProjectorMixin(EsriMap);
const projector = new Projector();

projector.append(root);
