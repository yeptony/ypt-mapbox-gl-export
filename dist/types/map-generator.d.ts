import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import 'js-loading-overlay';
import { DPIType, FormatType, MapGeneratorBase, SizeType, UnitType } from '@watergis/maplibre-gl-export';
export default class MapGenerator extends MapGeneratorBase {
    private accesstoken;
    constructor(map: MapboxMap, size?: SizeType, dpi?: DPIType, format?: FormatType, unit?: UnitType, fileName?: string, markerCirclePaint?: mapboxgl.CirclePaint, attributionOptions?: import("@watergis/maplibre-gl-export").AttributionOptions, northIconOptions?: import("@watergis/maplibre-gl-export").NorthIconOptions, accesstoken?: string);
    protected getRenderedMap(container: HTMLElement, style: mapboxgl.Style): mapboxgl.Map;
}
//# sourceMappingURL=map-generator.d.ts.map