// components/SubscribeModal.js

import { Button } from '@/components/custom/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useCreateCheckoutSessionMutation } from '@/features/subscription/subscription';

const SubscribeModal = ({ isOpen, onClose }) => {

  const [createCheckoutSession, { isLoading, isError }] = useCreateCheckoutSessionMutation();

  const handleSubscribe = async () => {
    try {
      const { data } = await createCheckoutSession();
      window.location.href = data.checkout_url; // Assuming `checkout_url` is returned by your backend
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe Now</DialogTitle>
          <DialogDescription>Your account is inactive. Please subscribe to activate it.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleSubscribe} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Subscribe'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
