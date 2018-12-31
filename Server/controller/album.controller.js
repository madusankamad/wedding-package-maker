import {pricingInfo} from "../Data/Pricing"

export const magazineSizes = (req, res) => {
    res.json({message: 'Magazine Sizes'});
};
export const magazinePriceById = (req, res) => {
    res.json({message: 'Magazine Price By Id'});
};
export const magazinePaperTypes = (req, res) => {
    res.json({message: 'Paper Types'});
};
export const magazinePaperPrice = (req, res) => {
    res.json({message: 'Paper Price By paper ID and Size'});
};

export const getAlbumPricingInfo = (req, res) => {
    const searchId = req.params.id;
    let ProcessedData = [];
    if(searchId==='all'){
        ProcessedData = filterPriceByParam('',"all");
        //console.log(searchId,ProcessedData);
    }
    else{
        ProcessedData = filterPriceByParam(searchId,"sizeid");
        //console.log(searchId,ProcessedData);
    }

    //console.log('getAlbumPricingInfo => Req : ',req.params,ProcessedData);
    res.json(ProcessedData);
};

//This will filter the data from price result array;
const filterPriceByParam = (paramValue,type) =>{
    let filterdResult = [];
    switch (type) {
        case "sizeid":
            filterdResult =  pricingInfo.filter(info=>info.sizeid===paramValue);
            break;
        case "all":
            filterdResult =  pricingInfo;
            break;
        default :
            filterdResult =  pricingInfo;
    }
    return(priceResultMapper(filterdResult));

};

const priceResultMapper = (resultArray) => {
    const processedResult = {};
    const albumSizeIds = [];
    resultArray.map(result => {
        const { width,
                height,
                designcharge,
                paperprice,
                binding,
                rexinebox,
                leatherbox,
                woodbox,
                fancyTop,
                glasstop4mm,
                glasstop2mm,
                photocoverfull,
                photocoverhalf
        } = result;
        //Mapping Data
        processedResult[result.sizeid] = {
            width: width,
            height: height,
            albumBox: {
                wood: woodbox,
                rexine: rexinebox,
                leather: leatherbox
            },
            coverFinish: {
                glassTop: {
                    size2mm: glasstop2mm,
                    size4mm: glasstop4mm
                },
                photoCover: {
                    fullCover: photocoverfull,
                    halfCover: photocoverhalf
                },
                fancyCover: fancyTop

            },
            designCharges: designcharge,
            paperPrice: paperprice,
            binding: binding
        }
        //adding albumID List
        albumSizeIds.push(result.sizeid);
    });

    return {albumSizes: albumSizeIds, pricingInfo: processedResult};

};