import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { LargeNumberLike } from 'crypto';

const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [30,30],        
    })

const icon2 = L.icon({
    iconUrl: "/images/marker-icon2.png",
    iconSize: [30,30],        
    })

    
const millenium:[number, number][] = [
    [49.26550397612994, -123.07947114132612],
    [49.26274899921747, -123.06925795964304],
    [49.259022004556634, -123.04535854430081],
    [49.26101191270524, -123.03289120197205],
    [49.26511399808913, -123.01365673080753],
    [49.266541693632796, -123.00168250382117],
    [49.26485729762449, -122.98217943080734],
    [49.259312003898515, -122.96395698662963],
    [49.25473302238625, -122.93919073080792],
    [49.25358022835716, -122.91814563080787],
    [49.24864686018608, -122.89696273080807],
    [49.26143360082903, -122.88989385964312],
    [49.278121961196106, -122.84603010197155],
    [49.27734996090709, -122.82815781546462],
    [49.2740500702725, -122.80007377313588],
    [49.280544348001484, -122.79393815964264],
    [49.2857331507308, -122.79159974430026],

]

const expo: [number, number][] = [
    [49.28611993601491, -123.11154791546461],
    [49.28608320275328, -123.12016114341185],
    [49.28341084781493, -123.116165688478],
    [49.27974945494635, -123.10981901731377],
    [49.27333997253812, -123.10036073080714],
    [49.26277700538363, -123.06913994245141],
    [49.24843925372727, -123.05589584430136],
    [49.24432134627083, -123.04538475964372],
    [49.23849926113409, -123.03170415779461],
    [49.229905701735824, -123.01261888663056],
    [49.22591185934423, -123.00384054430204],
    [49.2202002078422, -122.98839840012417],
    [49.212465553664494, -122.9591772308091],
    [49.20008974871182, -122.9489674001248],
    [49.2015711349061, -122.91262900197376],
    [49.20493692727262, -122.9061092731381],
    [49.20454785760014, -122.87431705964485],
    [49.19907152998553, -122.85064241546723],
    [49.18974196898185, -122.84798508848097],
    [49.182983653865215, -122.84484557995276],
];


const redOptions = { color: 'red' }
const orangeOptions = { color: 'orange' }
const fillBlueOptions = { color: 'blue' }

const center:[number, number] = [49.25299, -123.00600];

const Map = () => {
    return(
        <div style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', margin: '5px 0', }}>
          <h1 style={{ display: 'inline-block',marginTop: '-50px' }}>Eric The Transit Extraordinaire :D</h1>
          </div>
        <MapContainer
            style={{height: "100vh"}}
            center={[49.25299, -123.00800]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/EricQian01/leaflet-assignment">Erics Github</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Millenium Line Station  */}

            <Marker position={[49.26550397612994, -123.07947114132612]} icon={icon}>
                <Popup>
                VCC - Clark Station
                </Popup>
            </Marker>
            <Marker position={[49.26274899921747, -123.06925795964304]} icon={icon}>
                <Popup>
                Commercial - Broadway Station
                </Popup>
            </Marker>
            <Marker position={[49.259022004556634, -123.04535854430081]} icon={icon}>
                <Popup>
                Renfrew Station
                </Popup>
            </Marker>
            <Marker position={[49.26101191270524, -123.03289120197205]} icon={icon}>
                <Popup>
                Rupert Station
                </Popup>
            </Marker>
            <Marker position={[49.26511399808913, -123.01365673080753]} icon={icon}>
                <Popup>
                Gilmore Station
                </Popup>
            </Marker>
            <Marker position={[49.266541693632796, -123.00168250382117]} icon={icon}>
                <Popup>
                Brentwood Town Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.26485729762449, -122.98217943080734]} icon={icon}>
                <Popup>
                Holdom Station
                </Popup>
            </Marker>
            <Marker position={[49.259312003898515, -122.96395698662963]} icon={icon}>
                <Popup>
                Sperling - Burnaby Lake Station
                </Popup>
            </Marker>
            <Marker position={[49.25473302238625, -122.93919073080792]} icon={icon}>
                <Popup>
                Lake City Way Station
                </Popup>
            </Marker>
            <Marker position={[49.25358022835716, -122.91814563080787]} icon={icon}>
                <Popup>
                Production Way - University Station
                </Popup>
            </Marker>
            <Marker position={ [49.24864686018608, -122.89696273080807]} icon={icon}>
                <Popup>
                Lougheed Town Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.26143360082903, -122.88989385964312]} icon={icon}>
                <Popup>
                Burquitlam Station
                </Popup>
            </Marker>
            <Marker position={[49.278121961196106, -122.84603010197155]} icon={icon}>
                <Popup>
                Moody Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.27734996090709, -122.82815781546462]} icon={icon}>
                <Popup>
                Inlet Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.2740500702725, -122.80007377313588]} icon={icon}>
                <Popup>
                Coquitlam Central Station
                </Popup>
            </Marker>
            <Marker position={[49.280544348001484, -122.79393815964264]} icon={icon}>
                <Popup>
                Lincoln Station
                </Popup>
            </Marker>
            <Marker position={[49.2857331507308, -122.79159974430026]} icon={icon}>
                <Popup>
                Lafarge Lake - Douglas Station
                </Popup>
            </Marker>
            <Marker position={[49.26550397612994, -123.07947114132612]} icon={icon}>
                <Popup>
                VCC - Clark Station
                </Popup>
            </Marker>

            
            
            {/* Expo Line Stations */}



            <Marker position={[49.28611993601491, -123.11154791546461]} icon={icon2}>
                <Popup>
                Waterfront Station
                </Popup>
            </Marker>

            <Marker position={[49.28608320275328, -123.12016114341185]} icon={icon2}>
                <Popup>
                Burrard Station
                </Popup>
            </Marker>

            <Marker position={[49.28341084781493, -123.116165688478]} icon={icon2}>
                <Popup>
                Granville Station
                </Popup>
            </Marker>

            <Marker position={[49.27974945494635, -123.10981901731377]} icon={icon2}>
                <Popup>
                Stadium - Chinatown Station
                </Popup>
            </Marker>

            <Marker position={[49.27333997253812, -123.10036073080714]} icon={icon2}>
                <Popup>
                Main Street - Science World Station
                </Popup>
            </Marker>

            <Marker position={[49.26277700538363, -123.06913994245141]} icon={icon2}>
                <Popup>
                Commercial - Broadway Station
                </Popup>
            </Marker>

            <Marker position={[49.24843925372727, -123.05589584430136]} icon={icon2}>
                <Popup>
                Nanaimo Station
                </Popup>
            </Marker>

            <Marker position={[49.24432134627083, -123.04538475964372]} icon={icon2}>
                <Popup>
                29th Avenue Station
                </Popup>
            </Marker>

            <Marker position={[49.23849926113409, -123.03170415779461]} icon={icon2}>
                <Popup>
                    Joyce - Collingwood Station
                </Popup>
            </Marker>

            <Marker position={[49.229905701735824, -123.01261888663056]} icon={icon2}>
                <Popup>
                Patterson Station
                </Popup>
            </Marker>

            <Marker position={[49.22591185934423, -123.00384054430204]} icon={icon2}>
                <Popup>
                    Metrotown Station
                </Popup>
            </Marker>

            <Marker position={[49.2202002078422, -122.98839840012417]} icon={icon2}>
                <Popup>
                Royal Oak Station
                </Popup>
            </Marker>

            <Marker position={[49.212465553664494, -122.9591772308091]} icon={icon2}>
                <Popup>
                Edmonds Station
                </Popup>
            </Marker>

            <Marker position={[49.20008974871182, -122.9489674001248]} icon={icon2}>
                <Popup>
                22nd Street Station
                </Popup>
            </Marker>

            <Marker position={[49.2015711349061, -122.91262900197376]} icon={icon2}>
                <Popup>
                New Westminster Station
                </Popup>
            </Marker>

            <Marker position={[49.20493692727262, -122.9061092731381]} icon={icon2}>
                <Popup>
                Columbia Station
                </Popup>
            </Marker>

            <Marker position={[49.20454785760014, -122.87431705964485]} icon={icon2}>
                <Popup>
                Scott Road Station / Sapperton Station
                </Popup>
            </Marker>

            <Marker position={[49.19907152998553, -122.85064241546723]} icon={icon2}>
                <Popup>
                Gateway Station / Braid Station
                </Popup>
            </Marker>

            <Marker position={[49.18974196898185, -122.84798508848097]} icon={icon2}>
                <Popup>
                Surrey Central Station / Lougheed Town Centre Station
                </Popup>
            </Marker>

            <Marker position={[49.182983653865215, -122.84484557995276]} icon={icon2}>
                <Popup>
                King George Station / Production Way - University Station
                </Popup>
            </Marker>



            <Polyline pathOptions={redOptions} positions={millenium}/>
            <Polyline pathOptions={fillBlueOptions} positions={expo}/>

            {/* Millenium Line Circle Markers */}
            <CircleMarker center={[49.26550397612994, -123.07947114132612]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.26274899921747, -123.06925795964304]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.259022004556634, -123.04535854430081]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.26101191270524, -123.03289120197205]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.26511399808913, -123.01365673080753]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.266541693632796, -123.00168250382117]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.26485729762449, -122.98217943080734]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.259312003898515, -122.96395698662963]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.25473302238625, -122.93919073080792]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.25358022835716, -122.91814563080787]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.24864686018608, -122.89696273080807]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.26143360082903, -122.88989385964312]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.278121961196106, -122.84603010197155]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.27734996090709, -122.82815781546462]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.2740500702725, -122.80007377313588]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.280544348001484, -122.79393815964264]} pathOptions={redOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.2857331507308, -122.79159974430026]} pathOptions={redOptions} radius={17}></CircleMarker>

            {/* Expo Line Circle Markers */}
            <CircleMarker center={[49.28611993601491, -123.11154791546461]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.28608320275328, -123.12016114341185]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.28341084781493, -123.116165688478]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.27974945494635, -123.10981901731377]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.27333997253812, -123.10036073080714]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.26277700538363, -123.06913994245141]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.24843925372727, -123.05589584430136]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.24432134627083, -123.04538475964372]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.23849926113409, -123.03170415779461]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.229905701735824, -123.01261888663056]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.22591185934423, -123.00384054430204]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.2202002078422, -122.98839840012417]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.212465553664494, -122.9591772308091]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.20008974871182, -122.9489674001248]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.2015711349061, -122.91262900197376]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.20493692727262, -122.9061092731381]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.20454785760014, -122.87431705964485]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.19907152998553, -122.85064241546723]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.18974196898185, -122.84798508848097]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>
            <CircleMarker center={[49.182983653865215, -122.84484557995276]} pathOptions={fillBlueOptions} radius={17}></CircleMarker>

        </MapContainer>
        </div>
        )
}

export default Map;

