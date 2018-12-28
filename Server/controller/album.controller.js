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
    const ProcessedData = priceResultMapper(pricingInfo);
    //console.log('getAlbumPricingInfo => Req : ',req.params,ProcessedData);
    res.json(ProcessedData);
};


const priceResultMapper = (resultArray) => {

    const processedResult = {};
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
    });

    return processedResult;

};