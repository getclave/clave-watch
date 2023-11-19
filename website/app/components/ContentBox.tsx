type ContentBoxProps = {
    title: string;
    description: string;
}

 const ContentBox = ({title, description}: ContentBoxProps) =>  {
    return (
      
        <div className="text-white h-72 w-96 items-center justify-center flex flex-col gap-7 bg-[#011021] rounded-lg p-4">
            <div className="text-3xl">{title}</div>
            <div className="text-2xl text-center">{description}</div>
        </div>
      
    );
  }
  
  export {ContentBox};