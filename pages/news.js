import { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from 'moment';

import { RoughNotation } from "react-rough-notation";
import { GridLoadingSkeleton } from "../components";


import { useGetCryptoNewsQuery } from "./api/cryptoNewsApi";

const CryptoNews = (props) => {
  const { simplified } = props;

  //
  const baseImage = 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

  const avatarIcon = 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM='

  const {
    data: cryptoNews,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 24,
  });

  console.log(cryptoNews);

  //if the data is not yet fetched, show a loading indicator
  if (isFetching) {
    return (
      <Row gutter={[24, 24]} className="">
        <GridLoadingSkeleton count={4} xs={24} sm={12} lg={8} />
      </Row>
    );
  }

  //if the data is fetched/not yet fetched and there is an error, show the error
  if ((isSuccess && isError) || (!isFetching && isError)) {
    return <div>{error}</div>;
  }

  return (
    <div className={`${simplified ? "" : "mt-[130rem]"}`}>
      {!simplified && (
      <RoughNotation
        customElement="h2"
        className="text-2xl font-semibold mb-5"
        type="highlight"
        color="#fff176 "
        show={true}
        delay={1000}
      >
        Crypto News
      </RoughNotation>
      )}
      <Row gutter={[24, 24]}>
        {
          //if the data is fetched and there is no error, show the data

          cryptoNews?.value?.map((article, id) => (
            <Col xs={24} sm={12} lg={8} key={id}  className="min-h-[300px]">
              <a href={`${article.url}`} target="_blank" rel="noreferrer">
                <Card
                  bordered={false}
                  hoverable
                  className="break-words bg-white dark:bg-gray-800 shadow-md rounded"
                >
                  <div className="text-[12px] font-bold">
                    {/*  */}
                    <div className="flex justify-between items-center my-2">
                      <h3 className="text-[15px]">{article?.name}</h3>
                       {
                       // eslint-disable-next-line
                        <img
                    className="max-h-[250px] max-w-[50%]"
                      alt={`${article?.name} cover image`}
                      src={article?.image?.thumbnail?.contentUrl || baseImage}
                    />
                       }
                   
                    </div>
                    <p className="mb-1">
                      {article.description.length > 150 
                        ? `${article.description.substring(0, 150)}...`
                        : article.description}
                    </p>
                    <div className="flex justify-between items-center my-1">
                      <Avatar
                        src={article.provider[0]?.image?.thumbnail?.contentUrl || avatarIcon}
                        alt=""
                        size={40}
                      />
                    <span>
                      {moment(article.datePublished).startOf("ss").fromNow()}
                    </span>
                    </div>
                  </div>
                </Card>
              </a>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default CryptoNews;
