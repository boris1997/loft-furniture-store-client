import { ProductParams } from "globalTypes/product";
import React, { FC } from "react";
import { Pagination } from "react-bootstrap";
import { useParams } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import "./PaginationContainer.scss";
// import { LinkContainer } from "react-router-bootstrap";

interface IPagination {
  page?: number;
  productsAmount: number;
  limit: number;
  shouldBeActive: boolean;
}

const PaginationContainer: FC<IPagination> = ({
  page = 1,
  limit,
  productsAmount,
  shouldBeActive = false,
}) => {
  const { urlName } = useParams<ProductParams>();
  console.log(page);
  let pageAmount = [];
  console.log(productsAmount, limit);
  for (let i = 0; i < Math.ceil(productsAmount / limit); i++) {
    pageAmount.push(i + 1);
  }
  console.log(pageAmount);
  return (
    <Pagination>
      {pageAmount.map((productPage) => {
        const queryString = productPage > 1 ? `?page=${productPage}` : "";
        return (
          <LinkContainer
            to={`${urlName}${queryString}`}
            activeStyle={{ color: "red" }}
            /*           active={device.page === page}
          onClick={() => device.setPage(page)} */
          >
            <Pagination.Item active={productPage === page}>
              {productPage}
            </Pagination.Item>
          </LinkContainer>
        );
      })}
    </Pagination>
  );
};

export default PaginationContainer;
