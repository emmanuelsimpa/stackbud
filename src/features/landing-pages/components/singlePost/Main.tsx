import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import Author from '@/components/author';
import { formatDate } from '@/utils/format-date';
import { CopyShareLink } from './component';
import { Resourceful } from './component/resourceful';
import Loading from '@/components/loading/Loading';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { transformResponse } from '@/utils/transformData';
import { useGetSinglePost } from './_redux/mutation/Mutate';
import { actions } from './_redux';
import { Button } from '@/components/button/Button';
import { routes } from '@/config/routes';

export function Post() {
  const { id } = useParams();
  // window.location.href = `/${id}`;
  const dispatch = useAppDispatch();
  const { postResponse, isLoading, isError } = useGetSinglePost(id as string);
  const state = useAppSelector((state) => state.post);
  const { entities } = state;

  useEffect(() => {
    if (postResponse) {
      const data = transformResponse(postResponse.data);
      dispatch(actions.fetchSingleData(data));
    }
  }, [postResponse, dispatch, id]);

  if (isLoading && !entities) {
    return <Loading />;
  }

  if (isError && !entities) {
    toast('This ID is not valid');
  }
  return (
    <main>
      {isError ? (
        <Link to={routes.HOME}>
          <Button name="Go Back Home" />
        </Link>
      ) : (
        <div className="flex flex-col justify-between gap-4 md:gap-10 lg:items-center">
          <div className="flex-col space-y-2 flex-1">
            <div className="w-full flex justify-center">
              <button className="text-white font-semibold text-xl capitalize rounded-full bg-purple-500 py-1 px-4 md:px-8">
                {entities?.category}
              </button>
            </div>
            <div className="flex flex-col">
              <h2 className="text-stone-950 text-xl leading-loose text-center">
                {entities?.title}
              </h2>
              <p className="text-stone-500 text-base text-center">
                {entities?.text}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Author
                imagePath={entities?.image}
                name={`${entities?.owner.firstName} ${entities?.owner.lastName}`}
              />
            </div>
          </div>

          <div className="h-full w-full lg:h-96 lg:w-4/5 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <img
              className="object-cover w-full h-full"
              alt="Hero Image"
              src={entities?.image}
            />
          </div>
          <div className="flex justify-between h-full w-full -mt-5 lg:w-4/5 ">
            <div className="w-full">
              <p className="text-stone-950 text-sm">
                {formatDate(entities?.publishDate)}
                <span>. 5 mins</span>
              </p>
            </div>

            <div className="flex justify-end gap-2 w-full relative">
              <CopyShareLink title={entities?.text} />
            </div>
          </div>
        </div>
      )}

      {!isError && (
        <div className="flex justify-center pt-5">
          <section className="h-full w-full lg:w-4/5">
            <p className="text-stone-950 text-lg leading-relaxed">
              {entities?.text}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis temporibus mollitia sit quasi perspiciatis inventore,
              quis rerum earum atque incidunt minus? Culpa mollitia praesentium
              totam, tenetur voluptatum ratione nisi officiis sequi qui in,
              dignissimos assumenda. Dolores quos, similique saepe esse
              provident quo eos, sit repudiandae nulla rerum fugit aspernatur
              adipisci recusandae ad, vitae fugiat corporis asperiores? Rem
              molestiae dignissimos labore distinctio nostrum eveniet maxime
              libero laboriosam cum, at earum ipsum et repellendus aliquam amet,
              provident autem perspiciatis blanditiis tenetur. Dolorem ad sed
              ratione pariatur perferendis soluta autem voluptatibus porro,
              rerum fugit iusto hic blanditiis, ab, aperiam maxime itaque
              voluptate mollitia. Itaque minima assumenda in impedit sint?
              Consequuntur beatae repudiandae, sunt magnam voluptates suscipit
              accusamus soluta! Aliquid magni debitis autem laboriosam quos!
              Aspernatur laudantium facere corporis, beatae quasi facilis
              expedita, maxime provident et quibusdam repudiandae sint ducimus
              sapiente ratione qui architecto sunt distinctio. Nesciunt
              blanditiis ullam excepturi repellat dolore cumque rerum doloribus
              sunt odio hic saepe distinctio laudantium, consequatur iure a
              quaerat delectus? Sint quo nulla deleniti possimus, quam
              recusandae natus facilis? Sunt totam aliquam dolores obcaecati
              quae? Tempore alias et quam perspiciatis eius. Voluptate quae
              itaque aliquid distinctio, tempora praesentium tempore aliquam
              omnis labore impedit rerum eius excepturi est. Distinctio impedit
              officiis esse sint, consequuntur, molestias laudantium, accusamus
              consequatur nemo eligendi nobis? Corporis veniam blanditiis magni
              repellat sit numquam laboriosam consequatur voluptatibus, eligendi
              dolore dolor, neque tenetur consequuntur impedit quos dolorum
              natus eveniet. Alias sed omnis explicabo voluptas tempora nisi
              minus nulla debitis, sint ullam quia delectus quaerat numquam
              deserunt eum. Consequatur sapiente asperiores laboriosam quas
              tempora ullam illum facere saepe inventore, hic suscipit labore
              nisi sunt est rerum esse commodi vitae aspernatur! Odio fuga
              doloremque amet numquam recusandae vero. Eos incidunt reiciendis
              rerum culpa quasi maxime pariatur tempore, itaque officiis
              dignissimos iste labore minus soluta amet, enim quia alias quis
              nulla sit molestiae dolor veniam perspiciatis odit atque!
              Deleniti, magni officia ipsum quasi vitae eius? Corrupti vero
              asperiores odit eius vel odio laudantium reprehenderit. Voluptas
              perspiciatis ducimus natus provident earum. Quibusdam omnis
              explicabo laudantium beatae vel, autem reiciendis et vero aliquam
              molestiae at culpa consequatur excepturi illo aut veritatis. Omnis
              nihil iste quibusdam commodi delectus dignissimos repellendus,
              repellat voluptas numquam laudantium, sapiente eius rerum quis
              quam harum aspernatur mollitia nam deleniti? Quisquam quae, illo
              facere officiis iste non accusamus rem eveniet soluta sit ipsam
              obcaecati perferendis inventore delectus facilis recusandae,
              maxime natus nihil quos omnis placeat modi enim aliquid libero?
              Excepturi, reiciendis totam similique iusto, ullam aspernatur
              provident necessitatibus nemo voluptatem quaerat repudiandae
              soluta cumque aperiam debitis quam quos sequi rem incidunt
              consequatur amet accusamus. Dolorem vitae nihil expedita earum
              eveniet cumque quo adipisci officia aut nobis sequi non beatae, ex
              molestias? Vitae delectus repellendus doloremque corporis iusto
              perferendis quidem quasi qui consequatur, dolorem similique culpa
              at in odit adipisci quaerat eaque possimus vel optio distinctio!
              Asperiores minima a dicta laudantium. Voluptates fugiat enim
              nostrum quasi tempora vel voluptatibus ex! Necessitatibus aut
              reiciendis excepturi harum reprehenderit vero facere, delectus eum
              mollitia. Eveniet sapiente ea commodi sunt quaerat, quas
              assumenda.
            </p>
          </section>
        </div>
      )}

      <div className="max-w-5xl mx-auto pt-20">
        <div className="flex w-full gap-2">
          <div className="w-full flex justify-center">
            <Resourceful />
          </div>
        </div>
      </div>
    </main>
  );
}
