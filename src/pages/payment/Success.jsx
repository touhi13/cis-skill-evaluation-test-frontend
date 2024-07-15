
import { Button } from '@/components/custom/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGenerateTokenMutation } from '@/features/auth/authApi';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Success = () => {
    const [generateToken, { isLoading }] = useGenerateTokenMutation();

    const navigate = useNavigate();
    const effectRan = useRef(false);


    useEffect(() => {
        if (effectRan.current) return;
        effectRan.current = true;

        const fetchNewToken = async () => {
            try {
                await generateToken().unwrap();
            } catch (err) {
                console.error('Error generating new token:', err);
                navigate('/login');
            }
        };

        fetchNewToken();
    }, [generateToken, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="max-w-xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-green-600">Subscription Successful!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your subscription has been activated. Thank you for your purchase!</p>
                    <Link to="/">
                        <Button className="mt-4">
                            Go to Dashboard
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default Success;


