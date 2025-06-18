import type { TLoading } from "@customTypes/shared"


interface ILoading {
  loading: TLoading;
  error: string | null;
    children?: React.ReactNode;
}

const Loading = ({loading, error, children}: ILoading) => {
    if (loading === "pending") {
      return <p>Loading, please wait</p>;
    }
    if (loading === "failed") {
      return <p>Error: {error}</p>;
    }
  return (
    <>
      {children}
    </>
  )
}

export default Loading
