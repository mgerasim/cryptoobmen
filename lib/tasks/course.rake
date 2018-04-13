require 'net/http'
require 'addressable/uri'
namespace :course do
  desc "TODO"
  task test: :environment do
    answer = '{"BTC_USD":{"ask_quantity":"304.29811491","ask_amount":"3434926.42105354","ask_top":"6950","bid_quantity":"11629.17604452","bid_amount":"1243238.19330704","bid_top":"6935.0100011","ask":[["6950","0.17600112","1223.207784"],["6953.29093752","0.0938205","652.3612324"],["6962.75","0.01541166","107.30753566"],["6971.44","0.108","752.91552"],["6971.449999","0.0082819","57.73685174"],["6971.45","0.015","104.57175"],["6971.98330273","0.153","1066.71344531"],["6973.59","0.090818","633.32749662"],["6975","0.00652914","45.5407515"],["6979","0.00119025","8.30675475"],["6980","0.01","69.8"],["6980.25108688","0.75","5235.18831516"],["6980.75285722","0.01293127","90.26999999"],["6980.88888888","0.00477","33.29883999"],["6985","0.14487758","1011.9698963"],["6986.2623425","0.00606534","42.37405643"],["6989","0.20755522","1450.60343258"],["6989.06949855","0.0054383","38.00865665"],["6990","0.0127073","88.824027"],["6991.233389","0.6342","4433.8402153"],["6991.4","0.005","34.957"],["6995","0.01","69.95"],["6996.72","0.08486352","593.76628765"],["6999","0.00447238","31.30218762"],["6999.9948","0.02226094","155.82646424"],["7000","0.72923137","5104.61959"],["7001","0.00622929","43.61125929"],["7001.76","0.99800004","6987.75676007"],["7003.25628263","0.00714903","50.06648926"],["7003.6154766","0.00258543","18.10735756"],["7004","0.01","70.04"],["7004.44440475","0.00714276","50.03106531"],["7007.16070406","0.00214923","15.05999999"],["7008.49167379","0.00358311","25.1121966"],["7010","0.07498163","525.6212263"],["7010.7142607","0.01727613","121.11801096"],["7014.04708894","0.00117516","8.24262757"],["7015","0.02749","192.84235"],["7015.04708894","0.00429328","30.11756136"],["7015.33805246","0.00297519","20.87196362"],["7016","0.0914918","641.9064688"],["7016.8894028","0.02147291","150.67303462"],["7017.14982922","0.02664942","187.002973"],["7017.566726","6.3423","44507.5134463"],["7018.82980125","0.00340171","23.87602352"],["7020","0.11416273","801.4223646"],["7020.5504","0.01097277","77.03488481"],["7021.52","0.0038497","27.03074554"],["7023","0.14510927","1019.10240321"],["7023.80130994","0.00405207","28.46093457"],["7024","0.00798401","56.07968624"],["7025","0.4416915","3102.8827875"],["7028","0.50523025","3550.758197"],["7029.61018142","0.0020412","14.3488403"],["7030","0.0834","586.302"],["7030.0848","0.00279798","19.67003666"],["7030.5191","0.00328963","23.12780654"],["7033.61851398","0.00564366","39.69535146"],["7034.25368336","0.00714276","50.24398583"],["7035","0.01755513","123.50033955"],["7035.100001","0.01110933","78.15524749"],["7035.25176061","0.00606667","42.68055079"],["7037.05145621","0.00965792","67.96327999"],["7037.75892201","0.00214827","15.11900635"],["7037.96127769","0.0010978","7.72627389"],["7039.7","0.0029856","21.01772832"],["7040","0.011","77.44"],["7040.08513753","0.00428186","30.14465894"],["7042.88865778","0.00474344","33.40751977"],["7044","0.21080021","1484.87667924"],["7044.29980752","0.001","7.0442998"],["7045","0.01739938","122.5786321"],["7045.3288667","0.0010956","7.7188623"],["7046","0.01328244","93.58807224"],["7047.48230706","0.07130277","502.50501001"],["7049","0.35714407","2517.50854943"],["7049.16847723","0.001996","14.07014028"],["7050","0.32809837","2313.0935085"],["7050.1","0.0183","129.01683"],["7051","0.00998","70.36898"],["7053","0.0143","100.8579"],["7054.63816337","0.0065748","46.38283499"],["7055.55","0.001","7.05555"],["7058.9","0.00142681","10.0717091"],["7059.87514177","0.00606667","42.82993272"],["7059.9","0.001","7.0599"],["7060","0.01910033","134.8483298"],["7064.06296197","0.00714276","50.45690636"],["7066.43730501","0.01685023","119.07109386"],["7068","0.00100045","7.0711806"],["7070","0.21152255","1495.4644285"],["7070.0125","0.0155","109.58519375"],["7072.24","0.0247155","174.79394772"],["7075","0.002","14.15"],["7077","0.02","141.54"],["7078","0.00104571","7.40153538"],["7080","0.25405909","1798.7383572"],["7084.58470477","0.00606667","42.97983749"],["7085","0.04044942","286.5841407"],["7089","0.20386805","1445.22060645"]],"bid":[["6935.0100011","0.00206077","14.29146055"],["6935.010001","0.6343","4398.87684363"],["6934.04","0.00128861","8.93527328"],["6934.031","0.0012","8.3208372"],["6932.48517398","0.00453776","31.45795392"],["6932.39","0.0158585","109.93730681"],["6932","0.05","346.6"],["6930","0.01994228","138.2000004"],["6927.01","0.093","644.21193"],["6927","0.00707583","49.01427441"],["6926.02295541","0.00202797","14.04576677"],["6925.01","0.00546741","37.86186892"],["6925","2.20320351","15257.18430675"],["6923.80786461","0.00609217","42.18101455"],["6922.27779248","0.00186368","12.90091067"],["6920","0.02111","146.0812"],["6919.1","0.0119889","82.95239799"],["6918","0.010117","69.989406"],["6917","0.0014","9.6838"],["6916.635","0.002","13.83327"],["6914.7649605","0.0010499","7.25981173"],["6914.1036","0.098","677.5821528"],["6912.81731068","0.00379589","26.2402941"],["6911.69597677","0.09374257","647.92014392"],["6911","0.005489","37.934479"],["6910.83038985","0.153","1057.35704964"],["6910","0.02","138.2"],["6907.510058","6.3423","43809.50104085"],["6906.65342602","0.00111111","7.67405168"],["6905.49927215","0.001","6.90549927"],["6905","0.1","690.5"],["6903.88832015","0.75","5177.91624011"],["6903.02","0.0011","7.593322"],["6901.38","0.00882255","60.88777011"],["6901","0.07077189","488.39681289"],["6900.49751244","0.01114982","76.93930517"],["6900","1.03638309","7151.043321"],["6899.65905791","0.00611349","42.18099665"],["6898.95262136","0.00417538","28.80574879"],["6893.34413542","0.00278458","19.19506821"],["6890","0.13965715","962.2377635"],["6888","0.051","351.288"],["6885.08793204","0.00459282","31.62196955"],["6884.58290954","0.0027741","19.09852144"],["6884","0.005045","34.72978"],["6881","0.10470089","720.44682409"],["6880","1.1344098","7804.739424"],["6878","0.051","350.778"],["6876.65843765","0.00417013","28.67655965"],["6876","0.023119","158.966244"],["6875.59447724","0.00613489","42.1810158"],["6875","0.00516595","35.51590625"],["6873.70911807","0.01182685","81.29432668"],["6873.25336528","0.10410539","715.54272216"],["6873","0.07429999","510.66383127"],["6872.02","0.0011","7.559222"],["6871.22324272","0.005052","34.71341982"],["6870","0.19908321","1367.7016527"],["6868","0.01","68.68"],["6867.69668","0.00151724","10.41994411"],["6867","0.1","686.7"],["6865","0.01","68.65"],["6863.44212098","0.01165595","79.99993819"],["6859.99999999","0.001","6.85999999"],["6857.3585534","0.0055571","38.10702721"],["6854.50963242","0.00320956","21.99995993"],["6854","0.00111005","7.6082827"],["6853","0.75111928","5147.42042584"],["6852.6073108","0.00126125","8.64285097"],["6852","0.94969436","6507.30575472"],["6851.61382884","0.00615636","42.18100131"],["6851","0.998","6837.298"],["6850.159995","0.0055346","37.9128955"],["6850","2.24894011","15405.2397535"],["6843.49386408","0.00611271","41.83229337"],["6843","0.021","143.703"],["6841","0.00122176","8.35806016"],["6840","0.0011","7.524"],["6838.88","0.01","68.3888"],["6838.02","0.0011","7.521822"],["6836","0.03502193","239.40991348"],["6835.789","0.00280874","19.19995399"],["6835","0.00656724","44.8870854"],["6833","0.20803767","1421.52139911"],["6832","0.01046","71.46272"],["6830.11","0.01","68.3011"],["6830","0.03371892","230.3002236"],["6829.62917476","0.00672388","45.92160701"],["6829","0.01","68.29"],["6827.71681997","0.00617791","42.18102001"],["6825.41791537","0.01127247","76.93931868"],["6825.11","0.01","68.2511"],["6824","0.18109135","1235.7673724"],["6822","0.00276","18.82872"],["6821.12","0.00872579","59.51966068"],["6820","0.23239459","1584.9311038"],["6818.03100001","0.00439988","29.99851823"],["6818.031","0.002","13.636062"],["6816.25348163","0.00120786","8.23307993"],["6815.76448544","0.00739617","50.41055281"]]}}'
    hash = JSON.parse(answer)
    btc = "BTC"
    usd = "USD"
    puts hash["#{btc}_#{usd}"]["bid_top"]
    
  end
  task update: :environment do
    puts "course update"
    
    Admin::Converter.all.each {|converter| 
      puts "#{converter.cash_a.code}/#{converter.cash_b.code} #{converter.source_course_display}"
      if (converter.source_course == 1) 
      
        url = "https://api.exmo.com/v1/order_book/?pair=#{converter.cash_a.code}_#{converter.cash_b.code}"
        puts url
        
        uri = URI.parse(url)
        puts uri.host
        puts uri.port
        https = Net::HTTP.new(uri.host, uri.port)
        https.use_ssl = true
#	params = Addressable::URI.new
#	params.query_values = {:pair => '#{converter.cash_a.code}_#{converter.cash_b.code}'}
	#answer = https.post(uri.path, params.query).body
	answer = https.get(uri.request_uri).body
	
	# https://bablofil.ru/exmo-api/
	hash = JSON.parse(answer)
	puts answer
	course = 1.0
	if (hash["#{converter.cash_a.code}_#{converter.cash_b.code}"] != nil) 
        	course = hash["#{converter.cash_a.code}_#{converter.cash_b.code}"]["bid_top"]
        end
                 
	puts course
	converter.course = course;
	converter.save
      
      else
        
        url = "https://cex.io/api/convert/#{converter.cash_a.code}/#{converter.cash_b.code}"
    
	uri = URI.parse(url)
	https = Net::HTTP.new(uri.host, uri.port)
        https.use_ssl = true
	params = Addressable::URI.new
	params.query_values = {:amnt => 1}
	answer = https.post(uri.path, params.query).body
	hash = JSON.parse(answer)
	course =  hash['amnt'] 
	
	converter.course = course;
	converter.save
	
	
      end
    }
  end
end
