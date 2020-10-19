import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { wrapper, State } from "../../store/store";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import "../productList.css";
import Cookies from "cookies";
import Layout from "../../components/layouts/Layout";
import Container from "../../components/Containers/Container";
import "antd/dist/antd.css";
import ProductItem from "../../components/Products/ProductItem";
import useSticky from "../../shared/hooks/useSticky";
import ProductListLoading from "../../components/Loading/ProductListLoading";
import ListSideBarMenu from "../../components/Products/ListSideBarMenu";
import InfiniteScroll from "react-infinite-scroll-component";
import { FiRefreshCw } from "react-icons/fi";
import { serviceApiFormData } from "../../shared/hooks/seviceApi";

const ProductList = (props) => {
  console.log(props.product);
  const router = useRouter();
  // const { page, id, slug } = router.query;
  const page = router.query.page || 1;
  const { hideNav } = useSticky;
  const [hasMore, setHasMore] = useState(true);
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    if (props.product !== undefined && props.product.list !== undefined) {
      setHasMore(true);
      if (Number(page) === 1) {
        setListProduct(props.product.list);
        localStorage.setItem("totalproduct", props.product.total_record);
      } else if (Number(page) > 1) {
        setListProduct([...listProduct, ...props.product.list]);
      }
    }
  }, [props.product]);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const loadItems = () => {
    const category_seo = cookieCutter.get("category_seo");
    const totalProduct = localStorage.getItem("totalproduct");
    if (listProduct.length > 0)
      if (listProduct.length < Number(totalProduct)) {
        setHasMore(true);
        router.push({
          pathname: `/product/${category_seo}`,
          query: { page: `${Number(page) + 1}` },
          as: `/product/${category_seo}`,
        });
      } else {
        setHasMore(false);
      }
  };

  const refresh = () => {};
  const loader = (
    <div className="load-more">
      <div className="load-more-block" onClick={props.onClick}>
        <FiRefreshCw
          className={`${hasMore ? "load-more-icon" : "no-load-more"}`}
        />
        <span>Load more...</span>
      </div>
    </div>
  );

  // if (props.isLoading) return <ProductListLoading />;
  // if (router.isFallback) {
  //   return <ProductListLoading />;
  // }
  return (
    <React.Fragment>
      <Layout>
        <Container>
          <div className="row">
            <ListSideBarMenu
              // mainCategory={slug[0]}
              // paramsId={paramsId}
              // category_name={slug[0]}
              hideNav={hideNav}
              onChange={onChange}
            />
            <div className="main">
              <InfiniteScroll
                className="rowChild"
                dataLength={listProduct.length || 0}
                next={loadItems}
                hasMore={hasMore}
                loader={loader}
                refreshFunction={refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
              >
                {listProduct.map((item, index) => (
                  <ProductItem key={index} {...item} />
                ))}
              </InfiniteScroll>
            </div>
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const page = context.query.page || "1";
  try {
    const api = serviceApiFormData();
    const cookies = new Cookies(context.req, context.res);
    const category_seo = cookies.get("category_seo");

    const data = {
      page: page,
      seo_url: category_seo,
    };
    console.log(data);
    const productList = await api.post("ListProductWeb/getProductList", data);
    const product = productList.data;
    return {
      props: {
        product,
      },
    };
  } catch {
    return {
      props: {
        product: {},
      },
    };
  }
};

export default ProductList;
