import Loading from '@/components/Loading';
import PageView from '@/components/shared/PageView/PageView';
import { useGetVisitorMessagessByIdQuery } from '@/store/api/app/website/visitorMessages/visitorMessagesApiSlice';
import { useParams } from 'react-router-dom';

const VisitorMessageView = () => {
    const { id } = useParams();

    const { data, isFetching, isLoading, isError, error } =
        useGetVisitorMessagessByIdQuery(id);

    const items = [
        {
            status: "Status",
            value: data?.data?.status,
        },
        {
            title: "Name ",
            value: data?.data?.name,

        },
        {
            title: "Email",
            value: data?.data?.email,

        },
        {
            long_details: "Subject",
            value: data?.data?.subject,

        },
        {
            long_details: "Message",
            value: data?.data?.message,

        },
    ];

    if (isLoading || isFetching) return <Loading />;

    return (
        <>
            <div>
                <PageView items={items} title="View Visitor Message" />
            </div>
        </>
    );
};

export default VisitorMessageView;
