import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SubscribeModal from './components/SubscribeModal';

export default function Dashboard() {


    const user = useSelector((state) => state.auth.user);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (user && !user.is_active) {
            setModalOpen(true);
        }
    }, [user]);


    return (
        <>
            <div className='flex items-center justify-between space-y-2'>
                <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                    Dashboard
                </h1>
            </div>

            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Welcome to Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Welcome, {user?.name}! Explore your dashboard to see the latest updates.</p>
                </CardContent>
            </Card>

            <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
        </>
    );
}

