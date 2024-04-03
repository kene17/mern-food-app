import { Separator } from '@radix-ui/react-separator';
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='text-orange-500' />
            </SheetTrigger>
            <SheetContent className='space-y-3'>
                <span>Welcome to MernEats.com</span>

                <Separator />
                <SheetDescription className='flex'>
                    <Button className='flex-1 font-bold bg-orange-500'>
                        Login

                    </Button>

                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav