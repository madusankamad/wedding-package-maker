import{LANDSCAPE,PORTRAIT} from "../constants/Constants";

export const MagazineInfo = {
    mag_8x12L: {
        width: 12,
        height: 8,
        orientation: LANDSCAPE,
        pagePrice: ''
    },
    mag_12x8P: {
        width: 8,
        height: 12,
        orientation: PORTRAIT,
        pagePrice: ''
    },
    mag_8x14L: {
        width: 14,
        height: 8,
        orientation: LANDSCAPE,
        pagePrice: ''
    },
    mag_14x8P: {
        width: 8,
        height: 14,
        orientation: PORTRAIT,
        pagePrice: ''
    }

};

export const PackageInfo = {
    pkg_1: {
        name:"platinum",
        mainAlbum: {
            size:'',
            paper:'',
            pages:'',
            paperType:''
        },
        familyAlbum: {
            size:'',
            paper:'',
            pages:'',
            paperType:''
        }
        ,
        preshootAlbum: {
            size:'',
            paper:'',
            pages:'',
            paperType:''
        },
        enlargements: [{
            size:'',
            type:'',
            info:''
        }],
        signBoard: [{
            size:''
        }],
        shootingDays: {
            wedding: {days:'', crewCount:''},
            homecoming: {days:'', crewCount:''},
            preshoot: {days:'', crewCount:''},
        },
        thankyouCards:[{
            day:'',
            size:'',
            amount:''
        }]



    }
};

