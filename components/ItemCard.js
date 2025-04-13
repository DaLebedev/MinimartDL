import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'; 

const ItemCard = ({ item, addToCart }) => {

    const getStars = (rating) => {
        let fullStars = Math.floor(rating);
        let stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <StarIcon key={`full-${i}`} className="text-yellow-500 w-5 h-5" />
            );
        }

        let remainder = (rating - fullStars) * 100;
        if (remainder > 0) {
            console.log(remainder);
                stars.push(
                    <StarIcon key={`halfStar}`} className="text-yellow-500 w-5 h-5" style={{ clipPath: `inset(0 ${100 - remainder}% 0 0)` }}/>
            );
        }
        return stars;
    }

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
                <div className="flex items-center justify-start gap-x-1"> 
                    <span id="starRating" className="flex justify-content padding-1">{getStars(item.rating)}</span>
                    <span className="text-sm text-muted-foreground">{item.rating}</span>
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className={"flex justify-between items-center"}>
                    <span>{item.author}</span>
                    <span>${item.price}</span>
                </CardDescription>

                {/* // TODO: FINISH BUTTON TO BUY BOOK */}
                <button onClick={addToCart} className="{`flex text-white py-2 font-semibold gap-x-2 ${nunito.className}`}" style={{ backgroundColor: "#00C763", borderRadius: "10px" }}>
                    Add to Cart 
                </button>
            </CardHeader>
        </Card>
    );
};

export default ItemCard;