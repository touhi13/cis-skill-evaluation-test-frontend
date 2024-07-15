import { Button } from '@/components/custom/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Cancel = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="max-w-xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-red-600">Subscription Cancelled!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your subscription process has been cancelled. No charges were made.</p>
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

export default Cancel;
