export const color = [
    "White",
    "Black",
    "Red",
    "Being",
    "Pink",
    "Green",
    "Yellow"

];

export const filters = [
    {
        id: "color",
        name: "Color",
        options:[
        { value:"white", label:"White" },
        { value:"beige", label:"Beige" },
        { value:"blue", label:"Blue" },
        { value:"brown", label:"Brown" },
        { value:"green", label:"Green" },
        { value:"purple", label:"Purple" },
        { value:"yellow", label:"Yellow" },
    ],
    },

    {
        id: "size",
        name: "Size",
        options:[
            { value:"S", label:"S" },
            { value:"M", label:"M" },
            { value:"L", label:"L" },
        ],
    },
];

export const singleFilter=[
    {
        id: "price",
        name: "Price",
        options: [
            { value:"15-39", label:"15$ to 39$" },
            { value:"39-99", label:"39$ to 99$" },
            { value:"99-299", label:"99$ to 299$" },
            { value:"299-399", label:"299$ to 399$" },
            { value:"399-599", label:"399$ to 599$" },
        ],
    },
    {
        id: "discount",
        name: "Disccount range",
        options: [
            { value:"20", label:"20% And Above" },
            { value:"40", label:"40% And Above" },
            { value:"60", label:"60% And Above" },
            { value:"70", label:"70% And Above" },
            { value:"80", label:"80% And Above" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            {value: "in_stock", label: "In stock"},
            {value: "out_of_stock", label : "Out of stock"}
        ],
    }
]

export const sortOptions = [
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },

];