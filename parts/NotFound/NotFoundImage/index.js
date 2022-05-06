const NotFoundImage = props => (
  <>
    <img 
      {...props}
      width='423'
      height='423'
      classNames='not-found-image'
    />
    <style jsx>
      {`
        .not-found-image {
          max-width: 96%;
          height: 40vh;
          margin-bottom: 6rem;
        }
      `}
    </style>
  </>
);

export default NotFoundImage;