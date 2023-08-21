function returnVal(val: symbol | number): string | number {

    return val;
}

function returnVal2(val: any): any {
    return val
}

function returnVal3<Type>(val: Type): Type {
    return val;
}

interface DocumentCoord {
    docX: string
    docY: string
    fixed: boolean
}

returnVal3<DocumentCoord>({
    docX: "85",
    docY: "850",
    fixed: true
})

function getSearch<T>(products: T[]): T[] {
    console.log(products.lenght());
    return products;
}

const getSearch2 = <T>(products: T): T => {
    console.log(products.lenght());
    return products;
}

function myFunc<T, U extends string>(varX: T, varY: U) {
    return {
        varX, varY
    }
}

myFunc(2, "3");
myFunc(2, "HelloWorld");