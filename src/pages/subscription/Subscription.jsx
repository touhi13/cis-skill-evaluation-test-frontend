import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useDispatch, useSelector } from 'react-redux';
import { updateCacheKey } from '@/features/cacheKey/cacheKeySlice';
import { useGetReportQuery } from '@/features/report/reportApi';
import { Button } from '@/components/custom/button';
import { useCreateCheckoutSessionMutation } from '@/features/subscription/subscription';

const Subscription = () => {
    const userCacheKey = useSelector((state) => state.cacheKey.user);
    const user = useSelector((state) => state.auth.user);
    // console.log(user)

    const dispatch = useDispatch();

    const { data, isLoading, isError, error } = useGetReportQuery(userCacheKey);

    const handlePagination = (e, page) => {
        e.preventDefault();
        dispatch(updateCacheKey({
            key: 'user', payload: { "page": page }
        }));
    };
    const [createCheckoutSession, { isLoading:checkoutLoading, isError:checkoutError }] = useCreateCheckoutSessionMutation();


    const handleSubscribe = async () => {
      try {
        const { data } = await createCheckoutSession();
        window.location.href = data.checkout_url; // Assuming `checkout_url` is returned by your backend
      } catch (error) {
        console.error('Error creating checkout session:', error);
      }
    };

    const getMonthYear = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return { month, year };
    };

    return (
        <>
            <div className='mb-2 flex items-center justify-between space-y-2'>
                <div>
                    <h2 className='text-2xl font-bold tracking-tight'>Payment Report</h2>
                </div>

                {!user?.is_active && (
                    <>
                        <p className='text-red-500 mb-2'>Your account is inactive. Please subscribe to activate it.</p>

                        <div className='mb-4'>
                            <Button onClick={handleSubscribe} disabled={checkoutLoading}>
                                Subscribe
                            </Button>
                        </div>
                    </>

                )}
            </div>
            <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Year</TableHead>
                            <TableHead>Month</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Currency</TableHead>
                            <TableHead>Paid At</TableHead>
                            <TableHead>Invoice</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.data?.payments.data.map((payment) => {
                            const { month, year } = getMonthYear(payment.paid_at);
                            return (
                                <TableRow key={payment.id}>
                                    <TableCell>{year}</TableCell>
                                    <TableCell>{month}</TableCell>
                                    <TableCell>{payment.amount}</TableCell>
                                    <TableCell>{payment.currency}</TableCell>
                                    <TableCell>{payment.paid_at}</TableCell>

                                    <TableCell>

                                        <a href={payment.invoice} target="_blank" rel="noopener noreferrer">
                                            <Button>
                                                View Invoice
                                            </Button>
                                        </a>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    {/* <TableCaption>Total Payments: {data?.data?.totalPayments}</TableCaption> */}
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={10}>
                                <Pagination>
                                    <PaginationContent>
                                        {data?.data.payments.prev_page_url !== null &&
                                            <PaginationItem >

                                                <PaginationPrevious href="#" onClick={(e) => handlePagination(e, data?.data?.current_page - 1)} />

                                            </PaginationItem>
                                        }
                                        {data?.data?.payments.links
                                            .filter((_, index, array) => index !== 0 && index !== array.length - 1)
                                            .map((link) => (
                                                <PaginationItem key={link.label}>
                                                    {link.active === true ?
                                                        <PaginationLink href="#" onClick={(e) => handlePagination(e, parseInt(link.label))} isActive>{link.label}
                                                        </PaginationLink> :
                                                        <PaginationLink href="#" onClick={(e) => handlePagination(e, parseInt(link.label))} >{link.label}
                                                        </PaginationLink>
                                                    }
                                                </PaginationItem>
                                            ))}
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                        {data?.data.next_page_url !== null &&

                                            <PaginationItem>
                                                <PaginationNext href="#" onClick={(e) => handlePagination(e, data?.data?.payments.current_page + 1)} />
                                            </PaginationItem>
                                        }
                                    </PaginationContent>
                                </Pagination>
                            </TableCell>
                            {/* <TableCell className="text-right">$2,500.00</TableCell> */}
                        </TableRow>

                    </TableFooter>
                </Table>
            </div>
        </>
    );
};

export default Subscription;
