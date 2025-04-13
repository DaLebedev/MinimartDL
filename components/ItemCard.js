import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import Image from "next/image";

const ItemCard = ({ item }) => {

    return (
        <Card>
            <CardContent className="flex justify-center">
                <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={200}
                />
            </CardContent>
            <CardHeader>
                <div id="starRating">{item.rating}</div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className={"flex justify-between items-center"}>
                    <span>{item.author}</span>
                    <span>${item.price}</span>
                </CardDescription>
            </CardHeader>
        </Card>
    );
};

export default ItemCard;