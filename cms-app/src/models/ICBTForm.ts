import IGoodThing from './IGoodThing';

interface ICBTForm {
    GoodThings?: IGoodThing[]
    MinGoodThings: number
    AddPost: Function
}

export default ICBTForm;