"use strict";(self.webpackChunktruss_docs_2=self.webpackChunktruss_docs_2||[]).push([[802],{6799:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"version":"1.0.0","title":"Truss API","description":"A security API","termsOfService":"","contact":{"name":"Truss Team","email":"info@truss-security.com","url":"https://truss-security.com"},"license":{"name":"Apache 2.0","url":"https://www.apache.org/licenses/LICENSE-2.0.html"}},"servers":[{"url":"https://30lf7v2t1i.execute-api.us-west-2.amazonaws.com/dev5"}],"paths":{"/products/search":{"post":{"description":"Search for products","operationId":"search products","requestBody":{"description":"Search for security products","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchParams"}}}},"responses":{"200":{"description":"search response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchResponse"}}}},"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/products":{"get":{"description":"List all products.\\n","operationId":"list products","responses":{"200":{"description":"product list","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Product"}}}}},"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"post":{"description":"creates a new security product","operationId":"create product","requestBody":{"description":"Create a new security product","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/NewProduct"}}}},"responses":{"200":{"description":"create product response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Product"}}}},"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/products/{id}":{"get":{"description":"Returns a product based on a product ID","operationId":"find product by id","parameters":[{"name":"id","in":"path","description":"ID of product to fetch","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"get product response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Product"}}}},"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"put":{"description":"updates a product","operationId":"update product","requestBody":{"description":"Create a new security product","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/NewProduct"}}}},"responses":{"204":{"description":"product updated"},"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"delete":{"description":"deletes a single product based on a product ID","operationId":"delete product","parameters":[{"name":"id","in":"path","description":"ID of product to delete","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"204":{"description":"product deleted"},"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}}},"components":{"schemas":{"Product":{"allOf":[{"type":"object","required":["id"],"properties":{"id":{"type":"integer","format":"int64"}}},{"$ref":"#/components/schemas/NewProduct"}]},"NewProduct":{"type":"object","required":["name"],"properties":{"title":{"type":"string"},"author":{"type":"array","items":{"type":"string"}},"type":{"type":"number"},"category":{"type":"string"},"source":{"type":"string"},"pubDate":{"type":"string"},"reference":{"type":"string"},"tags":{"type":"array","items":{"type":"string"}},"industry":{"type":"array","items":{"type":"string"}},"region":{"type":"array","items":{"type":"string"}},"indicators":{"type":"object"}}},"SearchParams":{"type":"object","properties":{"startdate":{"type":"string","description":"return products that were uploaded on or after this date","format":"Unix Epoch Time"},"enddate":{"type":"number","description":"return products that were uploaded on or before this date","format":"Unix Epoch Time"},"category":{"type":"string","description":"product category value"},"source":{"type":"string","description":"product source value"},"limit":{"type":"number","description":"maximum number of results to return"},"startKey":{"$ref":"#/components/schemas/StartKey"},"scanIndexForward":{"type":"boolean","default":true,"description":"sort order of the products according to the product timestamp (true = oldest to newest)"}}},"SearchRespose2":{"allOf":[{"type":"object","required":["id"],"properties":{"id":{"type":"integer","format":"int64"}}},{"$ref":"#/components/schemas/Metadata"},{"type":"array","items":{"$ref":"#/components/schemas/Product"}}]},"SearchResponse":{"type":"object","properties":{"$metadata":{"$ref":"#/components/schemas/Metadata"},"Count":{"type":"string"},"Items":{"type":"array","items":{"$ref":"#/components/schemas/Product"}},"LastEvaluatedKey":{"$ref":"#/components/schemas/LastEvaluatedKey"},"ScannedCount":{"type":"integer","format":"int32"}}},"Metadata":{"type":"object","properties":{"httpStatusCode":{"type":"integer","format":"int32"},"requestId":{"type":"string"},"attempts":{"type":"integer","format":"int32"},"totalRetryDelay":{"type":"integer","format":"int32"}}},"LastEvaluatedKey":{"type":"object","description":"when paging, use the LastEvaluatedKey returned from the previous query as the startKey for the next query","properties":{"GSI2PK":{"type":"string"},"SK":{"type":"string"},"PK":{"type":"string"},"GSI2SK":{"type":"string"}}},"StartKey":{"type":"object","description":"when paging, use the LastEvaluatedKey returned from the previous query as the startKey for the next query","properties":{"GSI2PK":{"type":"string"},"SK":{"type":"string"},"PK":{"type":"string"},"GSI2SK":{"type":"string"}}},"Error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}}}}}}')}}]);