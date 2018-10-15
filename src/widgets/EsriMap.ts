import { v } from '@dojo/framework/widget-core/d';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { loadArcGIS } from '../helpers/LoadArcGIS';

class EsriMap extends WidgetBase {

	private _map: any;

	private async setupMap() {
		const [
			Map,
			Point,
			SimpleLineSymbol,
			SimpleMarkerSymbol,
			Color,
			Graphic
		] = await loadArcGIS();

		const markerSymbol = new SimpleMarkerSymbol(
			'diamond',
			20,
			new SimpleLineSymbol(
				'solid',
				new Color([88, 116, 152]), 2
			),
			new Color([88, 116, 152, 0.45])
		);

		this._map = new Map('mapNode', {
			center: [-118, 34.5],
			zoom: 8,
			basemap: 'dark-gray'
		});

		this._map.on('click', (event: any) => {

			const inPoint = new Point(event.mapPoint.x, event.mapPoint.y, this._map.spatialReference);
			const location = new Graphic(inPoint, markerSymbol);
			this._map.graphics.add(location);

		});
	}

	protected async onAttach() {
		await this.setupMap();
	}

	protected render() {
		return v('div', { key: 'root' }, [
			v('h1', ['ArcGIS JS API Dojo Example']),
			v('div', { id: 'mapNode' })
		]);
	}
}

export default EsriMap;
