import { Map as MapboxMap } from 'mapbox-gl';
import 'js-loading-overlay';
import { DPIType, FormatType, MapGeneratorBase, SizeType, UnitType } from '@watergis/maplibre-gl-export';
export default class MapGenerator extends MapGeneratorBase {
    private accesstoken;
    constructor(map: MapboxMap, size?: SizeType, dpi?: DPIType, format?: FormatType, unit?: UnitType, fileName?: string, markerCirclePaint?: {
        "circle-radius"?: import("mapbox-gl").DataDrivenPropertyValueSpecification<number>;
        "circle-radius-transition"?: import("mapbox-gl").TransitionSpecification;
        "circle-color"?: import("mapbox-gl").DataDrivenPropertyValueSpecification<import("mapbox-gl").ColorSpecification>;
        "circle-color-transition"?: import("mapbox-gl").TransitionSpecification;
        "circle-blur"?: import("mapbox-gl").DataDrivenPropertyValueSpecification<number>;
        "circle-blur-transition"?: import("mapbox-gl").TransitionSpecification;
        "circle-opacity"?: import("mapbox-gl").DataDrivenPropertyValueSpecification<number>;
        "circle-opacity-transition"?: import("mapbox-gl").TransitionSpecification;
        "circle-translate"?: import("mapbox-gl").PropertyValueSpecification<[number, number]>;
        "circle-translate-transition"?: import("mapbox-gl").TransitionSpecification;
        "circle-translate-anchor"?: import("mapbox-gl").PropertyValueSpecification<"map" | "viewport">;
        "circle-pitch-scale"?: import("mapbox-gl").PropertyValueSpecification<"map" | "viewport">;
        "circle-pitch-alignment"?: import("mapbox-gl").PropertyValueSpecification<"map" | "viewport">;
        "circle-stroke-width"?: import("mapbox-gl").DataDrivenPropertyValueSpecification<number>;
        "circle-stroke-width-transition"?: import("mapbox-gl").TransitionSpecification;
        "circle-stroke-color"?: import("mapbox-gl").DataDrivenPropertyValueSpecification<import("mapbox-gl").ColorSpecification>;
        "circle-stroke-color-transition"?: import("mapbox-gl").TransitionSpecification;
        "circle-stroke-opacity"?: import("mapbox-gl").DataDrivenPropertyValueSpecification<number>;
        "circle-stroke-opacity-transition"?: import("mapbox-gl").TransitionSpecification;
        "circle-emissive-strength"?: import("mapbox-gl").PropertyValueSpecification<number>;
        "circle-emissive-strength-transition"?: import("mapbox-gl").TransitionSpecification;
    } | undefined, attributionOptions?: import("@watergis/maplibre-gl-export").AttributionOptions, northIconOptions?: import("@watergis/maplibre-gl-export").NorthIconOptions, accesstoken?: string);
    protected getRenderedMap(container: HTMLElement, style: mapboxgl.Style): MapboxMap;
}
//# sourceMappingURL=map-generator.d.ts.map