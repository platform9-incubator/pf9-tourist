PF9_TOUR_MIN="pf9-tour.min.js"
TOUR_MIN="tourist.min.js"
WAIT_JS="waitUntilExists"
CSS_MIN="tourist.min.css"

S3_JS="s3://assets.platform9.net/dev/tour/js"
S3_CSS="s3://assets.platform9.net/dev/tour/css"
if [[ $NODE_ENV == 'production' ]]; then
  S3_JS="s3://assets.platform9.net/latest/tour/js"
  S3_CSS="s3://assets.platform9.net/latest/tour/css"
fi

echo "Updating $S3_JS"
echo "Updating $S3_CSS"

s3cmd put  $PF9_TOUR_MIN ${S3_JS}/${PF9_TOUR_MIN}  --acl-public --guess-mime-type --force
#s3cmd put  "jquery.livequery.min.js" ${S3_JS}/jquery.livequery.min.js  --acl-public --guess-mime-type --force
#s3cmd put  $WAIT_JS.min.js ${S3_JS}/$WAIT_JS.min.js  --acl-public --guess-mime-type --force
#s3cmd put  $TOUR_MIN ${S3_JS}/${TOUR_MIN}  --acl-public --guess-mime-type --force
#s3cmd put  $CSS_MIN ${S3_CSS}/${CSS_MIN}  --acl-public --mime-type=text/css --force

